import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2439Component } from './test-component2439.component';

describe('TestComponent2439Component', () => {
  let component: TestComponent2439Component;
  let fixture: ComponentFixture<TestComponent2439Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2439Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
