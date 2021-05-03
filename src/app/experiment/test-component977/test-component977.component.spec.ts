import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent977Component } from './test-component977.component';

describe('TestComponent977Component', () => {
  let component: TestComponent977Component;
  let fixture: ComponentFixture<TestComponent977Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent977Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
