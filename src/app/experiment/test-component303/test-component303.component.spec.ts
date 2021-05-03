import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent303Component } from './test-component303.component';

describe('TestComponent303Component', () => {
  let component: TestComponent303Component;
  let fixture: ComponentFixture<TestComponent303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent303Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
