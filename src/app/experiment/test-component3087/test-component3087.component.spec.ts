import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3087Component } from './test-component3087.component';

describe('TestComponent3087Component', () => {
  let component: TestComponent3087Component;
  let fixture: ComponentFixture<TestComponent3087Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3087Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
