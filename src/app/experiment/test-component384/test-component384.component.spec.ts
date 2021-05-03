import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent384Component } from './test-component384.component';

describe('TestComponent384Component', () => {
  let component: TestComponent384Component;
  let fixture: ComponentFixture<TestComponent384Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent384Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
