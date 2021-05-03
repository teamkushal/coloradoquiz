import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent486Component } from './test-component486.component';

describe('TestComponent486Component', () => {
  let component: TestComponent486Component;
  let fixture: ComponentFixture<TestComponent486Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent486Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
