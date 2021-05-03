import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent16Component } from './test-component16.component';

describe('TestComponent16Component', () => {
  let component: TestComponent16Component;
  let fixture: ComponentFixture<TestComponent16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
