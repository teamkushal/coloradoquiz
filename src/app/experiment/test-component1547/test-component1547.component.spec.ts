import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1547Component } from './test-component1547.component';

describe('TestComponent1547Component', () => {
  let component: TestComponent1547Component;
  let fixture: ComponentFixture<TestComponent1547Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1547Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
