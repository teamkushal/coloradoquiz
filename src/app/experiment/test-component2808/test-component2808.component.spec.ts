import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2808Component } from './test-component2808.component';

describe('TestComponent2808Component', () => {
  let component: TestComponent2808Component;
  let fixture: ComponentFixture<TestComponent2808Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2808Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
