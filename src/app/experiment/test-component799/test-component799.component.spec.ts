import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent799Component } from './test-component799.component';

describe('TestComponent799Component', () => {
  let component: TestComponent799Component;
  let fixture: ComponentFixture<TestComponent799Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent799Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
