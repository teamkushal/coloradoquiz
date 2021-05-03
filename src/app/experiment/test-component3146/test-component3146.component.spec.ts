import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3146Component } from './test-component3146.component';

describe('TestComponent3146Component', () => {
  let component: TestComponent3146Component;
  let fixture: ComponentFixture<TestComponent3146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
