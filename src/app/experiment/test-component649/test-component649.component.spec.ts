import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent649Component } from './test-component649.component';

describe('TestComponent649Component', () => {
  let component: TestComponent649Component;
  let fixture: ComponentFixture<TestComponent649Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent649Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
