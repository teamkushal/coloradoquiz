import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent398Component } from './test-component398.component';

describe('TestComponent398Component', () => {
  let component: TestComponent398Component;
  let fixture: ComponentFixture<TestComponent398Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent398Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
