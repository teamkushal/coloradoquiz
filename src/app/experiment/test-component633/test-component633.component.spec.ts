import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent633Component } from './test-component633.component';

describe('TestComponent633Component', () => {
  let component: TestComponent633Component;
  let fixture: ComponentFixture<TestComponent633Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent633Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
