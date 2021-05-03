import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3324Component } from './test-component3324.component';

describe('TestComponent3324Component', () => {
  let component: TestComponent3324Component;
  let fixture: ComponentFixture<TestComponent3324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3324Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
