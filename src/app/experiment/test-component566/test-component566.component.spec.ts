import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent566Component } from './test-component566.component';

describe('TestComponent566Component', () => {
  let component: TestComponent566Component;
  let fixture: ComponentFixture<TestComponent566Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent566Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
