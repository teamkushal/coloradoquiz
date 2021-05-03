import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2553Component } from './test-component2553.component';

describe('TestComponent2553Component', () => {
  let component: TestComponent2553Component;
  let fixture: ComponentFixture<TestComponent2553Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2553Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
