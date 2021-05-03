import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent739Component } from './test-component739.component';

describe('TestComponent739Component', () => {
  let component: TestComponent739Component;
  let fixture: ComponentFixture<TestComponent739Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent739Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
