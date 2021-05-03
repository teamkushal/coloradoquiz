import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent122Component } from './test-component122.component';

describe('TestComponent122Component', () => {
  let component: TestComponent122Component;
  let fixture: ComponentFixture<TestComponent122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent122Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
