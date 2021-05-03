import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1303Component } from './test-component1303.component';

describe('TestComponent1303Component', () => {
  let component: TestComponent1303Component;
  let fixture: ComponentFixture<TestComponent1303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1303Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
