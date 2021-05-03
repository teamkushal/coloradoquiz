import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2740Component } from './test-component2740.component';

describe('TestComponent2740Component', () => {
  let component: TestComponent2740Component;
  let fixture: ComponentFixture<TestComponent2740Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2740Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
