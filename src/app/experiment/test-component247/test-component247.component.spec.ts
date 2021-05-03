import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent247Component } from './test-component247.component';

describe('TestComponent247Component', () => {
  let component: TestComponent247Component;
  let fixture: ComponentFixture<TestComponent247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent247Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
