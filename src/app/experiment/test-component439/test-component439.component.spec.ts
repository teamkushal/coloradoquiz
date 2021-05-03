import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent439Component } from './test-component439.component';

describe('TestComponent439Component', () => {
  let component: TestComponent439Component;
  let fixture: ComponentFixture<TestComponent439Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent439Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
