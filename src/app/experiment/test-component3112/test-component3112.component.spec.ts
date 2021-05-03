import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3112Component } from './test-component3112.component';

describe('TestComponent3112Component', () => {
  let component: TestComponent3112Component;
  let fixture: ComponentFixture<TestComponent3112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
