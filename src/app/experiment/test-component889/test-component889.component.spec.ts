import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent889Component } from './test-component889.component';

describe('TestComponent889Component', () => {
  let component: TestComponent889Component;
  let fixture: ComponentFixture<TestComponent889Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent889Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
