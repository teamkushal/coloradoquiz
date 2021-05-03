import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1280Component } from './test-component1280.component';

describe('TestComponent1280Component', () => {
  let component: TestComponent1280Component;
  let fixture: ComponentFixture<TestComponent1280Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1280Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
