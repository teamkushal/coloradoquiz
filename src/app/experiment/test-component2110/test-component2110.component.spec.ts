import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2110Component } from './test-component2110.component';

describe('TestComponent2110Component', () => {
  let component: TestComponent2110Component;
  let fixture: ComponentFixture<TestComponent2110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
