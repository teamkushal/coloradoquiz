import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1048Component } from './test-component1048.component';

describe('TestComponent1048Component', () => {
  let component: TestComponent1048Component;
  let fixture: ComponentFixture<TestComponent1048Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1048Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
