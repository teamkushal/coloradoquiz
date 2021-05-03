import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1118Component } from './test-component1118.component';

describe('TestComponent1118Component', () => {
  let component: TestComponent1118Component;
  let fixture: ComponentFixture<TestComponent1118Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1118Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
