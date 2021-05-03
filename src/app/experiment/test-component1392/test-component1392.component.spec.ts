import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1392Component } from './test-component1392.component';

describe('TestComponent1392Component', () => {
  let component: TestComponent1392Component;
  let fixture: ComponentFixture<TestComponent1392Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1392Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
