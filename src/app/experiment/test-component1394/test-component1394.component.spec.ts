import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1394Component } from './test-component1394.component';

describe('TestComponent1394Component', () => {
  let component: TestComponent1394Component;
  let fixture: ComponentFixture<TestComponent1394Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1394Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
