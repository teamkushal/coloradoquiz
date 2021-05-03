import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1206Component } from './test-component1206.component';

describe('TestComponent1206Component', () => {
  let component: TestComponent1206Component;
  let fixture: ComponentFixture<TestComponent1206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1206Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
