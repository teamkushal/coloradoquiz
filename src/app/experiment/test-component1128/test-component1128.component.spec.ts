import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1128Component } from './test-component1128.component';

describe('TestComponent1128Component', () => {
  let component: TestComponent1128Component;
  let fixture: ComponentFixture<TestComponent1128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
