import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1222Component } from './test-component1222.component';

describe('TestComponent1222Component', () => {
  let component: TestComponent1222Component;
  let fixture: ComponentFixture<TestComponent1222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1222Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
