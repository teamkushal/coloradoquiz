import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1096Component } from './test-component1096.component';

describe('TestComponent1096Component', () => {
  let component: TestComponent1096Component;
  let fixture: ComponentFixture<TestComponent1096Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1096Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
