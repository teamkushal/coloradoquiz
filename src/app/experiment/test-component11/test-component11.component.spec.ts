import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent11Component } from './test-component11.component';

describe('TestComponent11Component', () => {
  let component: TestComponent11Component;
  let fixture: ComponentFixture<TestComponent11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
