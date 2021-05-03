import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3166Component } from './test-component3166.component';

describe('TestComponent3166Component', () => {
  let component: TestComponent3166Component;
  let fixture: ComponentFixture<TestComponent3166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
