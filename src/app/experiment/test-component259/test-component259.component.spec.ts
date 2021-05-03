import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent259Component } from './test-component259.component';

describe('TestComponent259Component', () => {
  let component: TestComponent259Component;
  let fixture: ComponentFixture<TestComponent259Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent259Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
