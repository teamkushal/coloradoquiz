import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3938Component } from './test-component3938.component';

describe('TestComponent3938Component', () => {
  let component: TestComponent3938Component;
  let fixture: ComponentFixture<TestComponent3938Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3938Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
