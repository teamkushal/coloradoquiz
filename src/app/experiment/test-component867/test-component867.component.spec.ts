import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent867Component } from './test-component867.component';

describe('TestComponent867Component', () => {
  let component: TestComponent867Component;
  let fixture: ComponentFixture<TestComponent867Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent867Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
