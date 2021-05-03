import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1918Component } from './test-component1918.component';

describe('TestComponent1918Component', () => {
  let component: TestComponent1918Component;
  let fixture: ComponentFixture<TestComponent1918Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1918Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
