import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent58Component } from './test-component58.component';

describe('TestComponent58Component', () => {
  let component: TestComponent58Component;
  let fixture: ComponentFixture<TestComponent58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent58Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
