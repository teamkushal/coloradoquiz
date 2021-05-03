import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent288Component } from './test-component288.component';

describe('TestComponent288Component', () => {
  let component: TestComponent288Component;
  let fixture: ComponentFixture<TestComponent288Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent288Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
