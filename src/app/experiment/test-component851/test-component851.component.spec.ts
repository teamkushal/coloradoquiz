import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent851Component } from './test-component851.component';

describe('TestComponent851Component', () => {
  let component: TestComponent851Component;
  let fixture: ComponentFixture<TestComponent851Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent851Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
