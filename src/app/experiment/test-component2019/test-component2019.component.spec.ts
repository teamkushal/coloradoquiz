import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2019Component } from './test-component2019.component';

describe('TestComponent2019Component', () => {
  let component: TestComponent2019Component;
  let fixture: ComponentFixture<TestComponent2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
