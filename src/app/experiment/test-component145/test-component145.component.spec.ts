import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent145Component } from './test-component145.component';

describe('TestComponent145Component', () => {
  let component: TestComponent145Component;
  let fixture: ComponentFixture<TestComponent145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
