import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent963Component } from './test-component963.component';

describe('TestComponent963Component', () => {
  let component: TestComponent963Component;
  let fixture: ComponentFixture<TestComponent963Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent963Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
