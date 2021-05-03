import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1158Component } from './test-component1158.component';

describe('TestComponent1158Component', () => {
  let component: TestComponent1158Component;
  let fixture: ComponentFixture<TestComponent1158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
