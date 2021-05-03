import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent835Component } from './test-component835.component';

describe('TestComponent835Component', () => {
  let component: TestComponent835Component;
  let fixture: ComponentFixture<TestComponent835Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent835Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
