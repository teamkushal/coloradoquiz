import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3858Component } from './test-component3858.component';

describe('TestComponent3858Component', () => {
  let component: TestComponent3858Component;
  let fixture: ComponentFixture<TestComponent3858Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3858Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
