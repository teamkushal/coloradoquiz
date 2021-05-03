import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent466Component } from './test-component466.component';

describe('TestComponent466Component', () => {
  let component: TestComponent466Component;
  let fixture: ComponentFixture<TestComponent466Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent466Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
