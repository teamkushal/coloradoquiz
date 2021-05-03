import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1129Component } from './test-component1129.component';

describe('TestComponent1129Component', () => {
  let component: TestComponent1129Component;
  let fixture: ComponentFixture<TestComponent1129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
