import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1330Component } from './test-component1330.component';

describe('TestComponent1330Component', () => {
  let component: TestComponent1330Component;
  let fixture: ComponentFixture<TestComponent1330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1330Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
